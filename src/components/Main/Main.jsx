import classes from "./Main.module.scss";
import Top from "./Top/Top";
import Middle from "./Middle/Middle";
import Buttom from "./Buttom/Buttom";
import Message from "./Message/Message";

const Main = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Top />
        <Middle />
        <Buttom />
        <Message />
      </div>
    </div>
  );
};

export default Main;
