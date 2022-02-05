import "../../styles/globals.css";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

function MyApp({ Component, pageProps }) {
  if (Component.Layout) {
    return (
      <Component.Layout>
        <Component {...pageProps} />
      </Component.Layout>
    );
  }

  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
