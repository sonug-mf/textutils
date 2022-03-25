import Navbar from "./components/navbar/Navbar";
import TextUtilsForm from "./components/forms/TextUtilsForm";




function App() {
  return (
    <main>
      <div className="container">
        <Navbar companyName="TextUtils" companyLogo="/images/logo/images.png" />
        <TextUtilsForm title="Text Utilities"></TextUtilsForm>
      </div>
    </main>

  );
}

export default App;
