import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Página do contador", () => {
  
  test("Contador inicia com valor 0", ()=>{
    const { getByText } = render (<App/>)
    const contador =getByText(/Contador/i)
    expect(contador).toHaveTextContent("Contador: 0")
  });

  test("Botão de soma realiza uma soma, de zero para 1.", () => {
    const { getByText } = render(<App />);
    const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null
    userEvent.click(botaoSomar);
    // throw new Error();
    const contador = getByText(/Contador/i);
    expect(contador).toHaveTextContent("Contador: 1");
  });

  
  test.todo("Depois de apertar 'Somar', contador não diminui");
});

/**
 *
 * (get|find|query)(All|)By(Text|LabelText|PlaceholderText|TestId)
 *
 */
