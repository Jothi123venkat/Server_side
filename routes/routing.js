const express = require("express");
const router = express.Router();
const model = require("../modelschema/schema");

router.post("/movies", async (req, res) => {
  const data = new model({
    Title: req.body.title,
    year: req.body.year,
    runtime: req.body.runtime,
    director: req.body.director,
    hero: req.body.hero,
    heroine: req.body.heroine,
    music: req.body.music,
  });

  try {
    const datatoSave = await data.save();
    res.status(201).json(datatoSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/movies", async (req, res) => {
  try {
    const data = await model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/movies/:id", async (req, res) => {
    try {
      const data = await model.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      });
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.delete("/movies/:id", async (req, res) => {
    try {
      const data = await model.findByIdAndDelete(req.params.id);
      if (!data) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
