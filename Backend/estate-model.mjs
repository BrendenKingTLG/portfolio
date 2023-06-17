import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  dbName: "properties",
});

const db = mongoose.connection;

db.once("open", (err, res) => {
  if (err) {
    res.status(500).json({ message: "Error connecting to db", error });
  } else {
    ("db connected...");
  }
});

const estateSchema = new mongoose.Schema({
  address: {
    homeNumber: { type: String, required: [true, "missing house number"] },
    street: { type: String, required: [true, "missing street name"] },
    city: { type: String, required: [true, "missing city name"] },
    state: { type: String, required: [true, "missing state"] },
    zip: { type: String, required: [true, "missing zip code"] },
  },
  yearBuilt: {
    type: String,
    min: "1700",
    max: new Date().getFullYear,
    required: [true, "missing year built"],
  },
  bedrooms: { type: Number, required: [true, "missing number of bedrooms"] },
  bathrooms: {
    type: Number,
    required: [true, "missing number of bathrooms"],
  },
  squareFeet: { type: Number, required: [true, "missing square footage"] },
  garageCarCount: {
    type: Number,
    min: 0,
    required: [true, "missing garage car count"],
  },
  propertyType: {
    type: String,
    enum: ["single-family", "multi-family"],
    default: "single-family",
    required: [true, "missing property type or type not supported"],
  },
  purchaseDate: { type: String, default: Date(Date.now()).toString() },
});

const Estate = mongoose.model("Estate", estateSchema);

export const createNewEstate = async (
  homeNumberParam,
  streetParam,
  cityParam,
  stateParam,
  zipParam,
  yearBuilt,
  bedrooms,
  bathrooms,
  squareFeet,
  garageCarCount,
  propertyType
) => {
  const estate = new Estate({
    address: {
      homeNumber: homeNumberParam,
      street: streetParam,
      city: cityParam,
      state: stateParam,
      zip: zipParam,
    },
    yearBuilt: yearBuilt,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    squareFeet: squareFeet,
    garageCarCount: garageCarCount,
    propertyType: propertyType,
  });
  await estate.save();
};

export const findAllProperties = async () => {
  const query = await Estate.find();
  return query;
};

export const findPropertiesById = async (id) => {
  const query = await Estate.findById(id);
  return query;
};

export const updateProperty = async (property) => {
  let itemMap = {};
  itemMap["address"] = {};
  for (const key in property) {
    if (key !== "id") {
      const address = ["homeNumber", "street", "city", "state", "zip"];
      console.log(itemMap);
      if (address.includes(key)) {
        itemMap["address"][key] = property[key];
      } else {
        itemMap[key] = property[key];
      }
    }
  }
  await Estate.updateOne({ _id: property["id"] }, itemMap, {
    runValidators: true,
  });
  return itemMap;
};

export const deletePropertyById = async (id) => {
  const result = await Estate.deleteOne({ _id: id }).exec();
  return result.deletedCount;
};
