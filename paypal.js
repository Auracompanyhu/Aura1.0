import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
    const initialOptions = {
        clientId: "AfTumM16DMZZBnZQWU0zc5ODV92HAKLF1V_2TuofG_ncNZo-8LweuInzJNa3_ORWYpKs_7FLAXAKNezI",
        // Add other options as needed
    };
    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons />
            </PayPalScriptProvider>
        </div>
    );
}