const express=require("express")
const router=express.Router();

router.post("/createLoan",createLoan)
router.get("/allLoans",getAllLoans);
router.get("/loans/:id",getLoansById);
router.get("/payments/:id",getPaymentsById);
router.post("/doPayment",doPayment);
router.put("/update",updateState)

module.exports=router