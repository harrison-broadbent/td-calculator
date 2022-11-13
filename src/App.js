import Container from "./components/container";
import Header from "./components/header";
import Card from "./components/card";
import Calculator from "./components/calculator";

function App() {
  console.log(
    "%cFerocia Take Home Test",
    "font-size: 20px; font-family: Inter; text-decoration-line: underline; text-decoration-color: #ff7a64; font-weight: 700; "
  );
  console.log(
    "%cHarrison Broadbent -> https://harrisonbroadbent.com/software",
    "font-size: 12px; font-weight: 400; font-family: Inter"
  );

  return (
    <div className="App bg-gray-50 h-screen">
      <Container>
        <Header />
        <Card>
          <h2 className="font-bold text-xl tracking-tight">
            Term Deposit Calculator
          </h2>
          <Calculator />
        </Card>
      </Container>
    </div>
  );
}

export default App;
