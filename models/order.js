const mongoose = require("mongoose");
const { string } = require("joi");

mongoose
  .connect("mongodb://localhost/cleanforce")
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

const stockorderSchema = mongoose.Schema({
  date: Date,
  ordered_by: {
    name: String,
    email: String,
  },
  ordered_to: {
    name: String,
    email: String,
  },
  delivery: {
    officePickup: Boolean,
    deliveryLocation: String,
  },
  hand_soap: [
    {
      name: { type: String, default: "100gm soap bar" },
      item_code: { type: String, default: "tpr2/400-10" },
      quantity: Number,
    },
    {
      name: { type: String, default: "deb foam hand wash" },
      item_code: String,
      quantity: Number,
    },
  ],
  gloves: [
    { xl: Number },
    { l: Number },
    { m: Number },
    { s: Number },
    { xs: Number },
  ],
  chemical: [
    {
      name: { type: String, default: "fresco" },
      quantity: Number,
    },
    {
      name: { type: String, default: "spruce" },
      quantity: Number,
    },
    {
      name: { type: String, default: "spray and wipe" },
      quantity: Number,
    },
    {
      name: { type: String, default: "lemon" },
      quantity: Number,
    },
    {
      name: { type: String, default: "softie" },
      quantity: Number,
    },
    {
      name: { type: String, default: "fast glass" },
      quantity: Number,
    },
  ],
  hand_towels: [
    {
      name: { type: String, default: "caprice hand towels" },
      item_code: String,
      quantity: Number,
      comment: String,
    },
    {
      name: { type: String, default: "mel green hand towel rolls" },
      item_code: { type: String, default: "htr16/80-05" },
      quantity: Number,
      comment: String,
    },
    {
      name: { type: String, default: "livi premium compact towel" },
      item_code: { type: String, default: "1416" },
      quantity: Number,
      comment: {
        type: String,
        default: "only Ability Works and FYA order this product",
      },
    },
    {
      name: { type: String, default: "premium ultraslim towel" },
      item_code: { type: String, default: "pwustba" },
      quantity: Number,
      comment: String,
    },
    {
      name: { type: String, default: "caprice deluxe slimfold towels" },
      item_code: { type: String, default: "4000cu" },
      quantity: Number,
      comment: {
        type: String,
        default: "only BSL Johnson street order this product",
      },
    },
    {
      name: { type: String, default: "scott super slim hand towels" },
      item_code: { type: String, default: "kc4457" },
      quantity: Number,
      comment: { type: String, default: "only CMFEU order this product" },
    },
    {
      name: { type: String, default: "abc style single fold hand towel" },
      item_code: { type: String, default: "3600" },
      quantity: Number,
      comment: {
        type: String,
        default: "only Western Crew order this product",
      },
    },
  ],
  toilet_paper: [
    {
      name: { type: String, default: "livi toilet paper" },
      item_code: { type: String, default: "7001(7008)" },
      quantity: Number,
      comment: String,
    },
    {
      name: { type: String, default: "livi interleaved toilet tissue" },
      item_code: { type: String, default: "1001" },
      quantity: Number,
      comment: String,
    },
    {
      name: { type: String, default: "kleenex toilet paper" },
      item_code: { type: String, default: "kc4735" },
      quantity: Number,
      comment: { type: String, default: "only CMFEU order this product" },
    },
    {
      name: { type: String, default: "livi jumbo toilet rolls" },
      item_code: String,
      quantity: Number,
      comment: String,
    },
  ],
  bin_liners: [
    {
      name: { type: String, default: "27 ltrs small bin liners (rolls)" },
      quantity: Number,
    },
    {
      name: { type: String, default: "36 ltrs small bin liners (rolls)" },
      quantity: Number,
    },
    {
      name: { type: String, default: "73 ltrs large bin liners (carton)" },
      quantity: Number,
    },
    {
      name: { type: String, default: "120 ltrs bin liners" },
      quantity: Number,
    },
  ],
  scourers: [
    {
      name: { type: String, default: "white scourers" },
      quantity: Number,
    },
    {
      name: { type: String, default: "green scourers" },
      quantity: Number,
    },
  ],
  extras: [
    {
      name: { type: String, default: "Trolley bag" },
      quantity: Number,
    },
    {
      name: { type: String, default: "Vaccum bag" },
      quantity: Number,
    },
    {
      name: { type: String, default: "Red bucket" },
      quantity: Number,
    },
    {
      name: { type: String, default: "Blue bucket" },
      quantity: Number,
    },
  ],
});
