import { banner1 } from "../../image";

const About = () => {
  return (
    <>
    <span id="about"></span>
      <div className="dark:bg-black py-14 px-5 page-container">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <img
                src={banner1}
                alt="image"
                className=" max-h-[300px] sm:scale-125 drop-shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-5">
                <div className="flex items-center gap-4 dark:text-white">
                  <div>
                    <h1 className="text-primary text-7xl font-bold">1</h1>
                  </div>
                  <div>
                    <p className="text-secondary font-bold">Global FItness</p>
                    <p className="font-bold text-2xl sm:text-4xl">About US</p>
                  </div>
                </div>
                <div className="text-justify">
                  <p className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident sequi culpa ducimus eum. Totam eaque debitis
                    excepturi ratione eum dolorum, magni, soluta rerum culpa
                    doloribus hic placeat sit rem ex. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat temporibus,
                    reprehenderit qui in non quibusdam quam? Dolor iste maiores
                    ex magnam nesciunt! Labore necessitatibus saepe ut, cumque
                    earum dolores autem. Recusandae assumenda nam omnis! Nam ad
                    consequuntur saepe nostrum quam exercitationem autem
                    veritatis at quis vero deserunt aliquam quo nemo accusantium
                    esse sit suscipit, culpa, mollitia temporibus dolorum dicta
                    beatae? Pariatur nobis modi voluptates deleniti temporibus
                    quibusdam est, aliquid explicabo tempore ipsum similique
                    placeat numquam itaque ducimus totam libero obcaecati atque
                    minus laborum recusandae repellendus omnis? Accusantium
                    dolore laudantium incidunt.
                  </p>
                </div>
                <div>
                  <button className="primary-btn">GetStarted</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
