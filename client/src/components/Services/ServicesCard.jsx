/* eslint-disable no-unused-vars */


const ServicesCard = (item, index) => {

    const {name, desc, bgColor, textColor} = item.item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[25px] leading-9 text-headingColor font-bold">{name}</h2>
      <p className="text-base leading-7 text-textColor mt-4">{desc}</p>
    </div>
  )
}

export default ServicesCard








//  name: "Burn Treatment",
// desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
// bgColor: "rgba(151, 113, 255, .2)",
// textColor: "#9771FF",