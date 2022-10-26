import { Routes, Route } from "react-router-dom";
import Choice from "./pages/Choice";
import Index from "./pages/index/index";
import Order from "./pages/Order/index";
import Payment from "./pages/payment";
import SendOrder from "./pages/SendOrder";

export default function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Choice" element={<Choice />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/SendOrder" element={<SendOrder />} />
    </Routes>
  );
}
