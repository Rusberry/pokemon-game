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
        id="1"
        title="New impression"
        desc="You like it!"
        urlBg={layoutBg1}
      />
      <Layout
        id="2"
        title="New experience"
        desc="You like it!"
        colorBg="#f300b4"
      />
      <Layout
        id="3"
        title="New copabilities"
        desc="You like it!"
        urlBg={layoutBg3}
      />
      <Footer />
    </>
  );
};

export default App;
