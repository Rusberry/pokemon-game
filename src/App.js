import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import layoutBg1 from "./assets/bg1.jpg";
import layoutBg3 from "./assets/bg3.jpg";

const App = () => {
  return (
    <>
      <Header title="Pokemon Card Game" desc="Enjoy!" />
      <Layout
        id="FirstScreen"
        title="New impression"
        desc="TL;DR!"
        urlBg={layoutBg1}
      />
      <Layout
        id="SecondScreen"
        title="New experience"
        desc="You like it!"
        colorBg="#f300b4"
      />
      <Layout
        id="ThirdScreen"
        title="New copabilities"
        desc="Play now!"
        urlBg={layoutBg3}
      />
      <Footer />
    </>
  );
};

export default App;
