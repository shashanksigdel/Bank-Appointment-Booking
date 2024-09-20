import Navbar from "./components/layouts/Navbar";
import Appointments from "./components/pages/Appointments";
import BookAppointment from "./components/pages/BookAppointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetHelp from "./components/pages/GetHelp";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/layouts/Footer";
import RescheduleAppointment from "./components/pages/RescheduleAppointment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Appointments />} />
          <Route path="/getHelp" element={<GetHelp />} />
          <Route
            exact="true"
            path="/bookAppointment"
            element={<BookAppointment />}
          />
          <Route
            exact="true"
            path="/reschedule/:id"
            element={<RescheduleAppointment />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
