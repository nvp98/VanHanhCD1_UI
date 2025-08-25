import './App.css'
import GlobalLoading from './components/GlobalLoading';
import NotificationListener from './components/NotificationListener';
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
  <>
    <GlobalLoading />
    <NotificationListener />
    <AppRoutes />
  </>
  );
};

export default App
