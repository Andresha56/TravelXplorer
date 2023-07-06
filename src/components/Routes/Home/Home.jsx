import Nav from '../../Nav/Nav';
import WhereToGo from '../../WhereToGo/WhereToGo';
import WhyUs from '../../WhyUs/WhyUs';
import DestinationData from '../../Dataobject/Data';
import Destination from '../../destination/Destination';
function Home() {
  return (
    <>
      <Nav />
      <WhereToGo />
      <Destination
        data={DestinationData}
        heading="Popular Destination"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti est
sunt labore dignissimos, reprehenderit cumque maxime voluptates at
voluptas."
      />
      <WhyUs />
    </>
  );
}

export default Home;
