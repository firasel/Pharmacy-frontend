import { useRouter } from "next/router";
import DashboardHome from "../components/DashboardHome/DashboardHome";
import Sales from "../components/Sales/Sales";

const DashboardRouting = () => {
  const router = useRouter();
  switch (router.asPath) {
    case "/dashboard":
      return <DashboardHome />;
      break;
    case "/dashboard/sales":
      return <Sales />;
      break;
    default:
      return <DashboardHome />;
      break;
  }
};
export default DashboardRouting;
