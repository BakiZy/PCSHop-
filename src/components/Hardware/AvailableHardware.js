import classes from "./AvailableHardware.module.css";
import Card from "../UI/Card";
import HardwareItem from "./HWItem/HardwareItem";

const DUMMY_HARDWARE = [
  {
    id: "m1",
    name: "AMD Ryzen 5 3600",
    description: "CPU 6core 12 threads ",
    price: 155.99,
  },
  {
    id: "m2",
    name: "RTX 3070",
    description: "Nvidia graphics card 8gb ram",
    price: 799,
  },
  {
    id: "m3",
    name: "GTX 1660",
    description: "Nvidia graphics card 6gb ram",
    price: 299,
  },
  {
    id: "m4",
    name: "LG OLED 27 inch",
    description: "28 inch ips oled screen 5ms",
    price: 399,
  },
];

const AvailableHardware = () => {
  const hwList = DUMMY_HARDWARE.map((hw) => (
    <HardwareItem
      id={hw.id}
      key={hw.id}
      name={hw.name}
      description={hw.description}
      price={hw.price}
      //meal = {meal}
    />
  ));

  //   <HardwareCard
  //     key={hw.id}
  //     id={hw.id}
  //     name={hw.name}
  //     description={hw.description}
  //     price={hw.price}
  //   />

  return (
    <section className={classes.hw}>
      <Card>
        <ul>{hwList}</ul>
      </Card>
    </section>
  );
};

export default AvailableHardware;
