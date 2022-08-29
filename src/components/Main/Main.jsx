import classes from "./Main.module.scss";
import Top from "./Top/Top";
import Middle from "./Middle/Middle";
import Message from "./Message/Message";
import Buttom from "./Buttom/Buttom";

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
