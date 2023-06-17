import express from "express";
import "dotenv/config";
import * as property from "./estate-model.mjs";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.post("/log", (req, res) => {
  console.log(req.body.homeNumber);
  property
    .createNewEstate(
      req.body.homeNumber,
      req.body.street,
      req.body.city,
      req.body.state,
      req.body.zip,
      req.body.yearBuilt,
      req.body.bedrooms,
      req.body.bathrooms,
      req.body.squareFeet,
      req.body.garageCarCount,
      req.body.propertyType
    )
    .then((property) => {
      res.status(201).json(property);
    })
    .catch((err) => {
      res.status(400).json({
        error: `the request to create a property has failed \n${err}`,
      });
    });
});

app.get("/log", (req, res) => {
  (req.body.id !== undefined
    ? property.findPropertiesById(req.body.id)
    : property.findAllProperties()
  )
    .then((property) => {
      if (property !== undefined) {
        res.status(201).json(property);
      } else {
        res.status(404).json({ message: "property not found" });
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({ error: "the request to retrieve a property has failed" });
    });
});

app.put("/log/:id", (req, res) => {
  property
    .updateProperty(findUserPropertiesInReq(req))
    .then((itemMap) => {
      res.status(201).json(itemMap);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: `the request to retrieve a property has failed \n${err}`,
      });
    });
});

app.delete("/log/:id", (req, res) => {
  property
    .deletePropertyById(req.params.id)
    .then((x) => {
      res.status(201).json({ message: "property deletion is successful" });
    })
    .catch((err) => {
      console.log(req.params.id);

      res
        .status(400)
        .json({ error: "the request to delete a property has failed" });
    });
});

//find request properties
function findUserPropertiesInReq(req) {
  let params = {};
  params["id"] = req.params["id"];
  for (const key in req.body) {
    params[key] = req.body[key];
  }
  console.log(params);
  return params;
}

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
