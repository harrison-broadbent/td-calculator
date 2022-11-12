import Container from "./components/container";
import Header from "./components/header";
import Card from "./components/card";
import Calculator from "./components/calculator";

function App() {
  return (
    <div className="App bg-gray-50">
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
