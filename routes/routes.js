const { createEntry } = require("../controllers/entrycontrollers");
const { validate } = require("../models/user");

router.post("/",add,validate(entrySchema),
createEntry);

router.get(":id", getEntry);

router.put(":id", updateEntry);

router.delete(":id", deleteEntry);

router.get("/tag/:tag", filterByTag); 
