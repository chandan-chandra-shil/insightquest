import Form from "../Form/Form";
import Banner from "../banner/Banner";
import ContactUs from "../contactUs/ContactUs";
import SurveyCard from "../surveyCard/SurveyCard";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Form></Form>
      <SurveyCard></SurveyCard>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;