const Artist = require("../models/Artist");

exports.getArtists = async (req, res) => {
  const artists = await Artist.find({ active: true }).sort({ createdAt: -1 });
  res.json(artists);
};

exports.createArtist = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const artist = await Artist.create({
      name: req.body.name,
      type: req.body.type,
      image: req.file ? req.file.path : "",
    });

    res.json(artist);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    artist.name = req.body.name || artist.name;
    artist.type = req.body.type || artist.type;

    if (req.file) {
      artist.image = req.file.path;
    }

    await artist.save();

    res.json(artist);
  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteArtist = async (req, res) => {
  await Artist.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
