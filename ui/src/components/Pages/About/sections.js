import React from 'react';
import _ from 'lodash/fp';

const cName = 'About';

const company = {
  heading: 'About Us',
  text: (
    <React.Fragment>
      <p className={`${cName}__text`}>
        Wharncliffe Trailworks are a new company created to express our passion for the craft of trail building. Born in the grassroots of Wharncliffe Woods, Sheffield, our team have spent the past five years as a core part of the scene, helping to create the unique and refined trails that have been the basis for a thriving riding community and have attracted riders from the UK and abroad.
      </p>
      <p className={`${cName}__text`}>
        To us, trail building is far more than creating facilities to ride. Trails form an essential part of the relationship between the rider and environment, and must be created to complement and enhance this connection. We believe trails should be created holistically and emphasise the setting with their form and materiality to connect the rider with a strong sense of place in the surrounding environment.
      </p>
      <p className={`${cName}__text`}>
        Simultaneously, trails should be crafted to work harmoniously with the rider and bike to provide exceptional flow and be the most fun to ride. As riders ourselves, we have spent years building trails we love and have developed a refined understanding of the forms and complex physics involved. This knowledge allows Wharncliffe Trailworks to deliver trails of the highest possible standard.
      </p>
      <p className={`${cName}__text`}>
        The end result of our process are trails unlike any other. We love what we do, and dedicate ourselves to deliver trails that you and the community will love too.
      </p>
    </React.Fragment>
  ),
};

const rawProcessItems = [
  {
    header: 'Site visit and discussion',
    body: 'Establish the needs of the client and understnad the materiality and nature of the place.'
  },
  {
    header: 'Design, planning and consultancy',
    body: 'Conceive of the best possible use of the trail area and provide the necessary steps to turn the concept into a workable strategy.',
  },
  {
    header: 'Tree felling and clearing',
    body: 'We are qualified chainsaw operators and can provide the means to clear the trail path responsibly.',
  },
  {
    header: 'Plant operation',
    body: 'We are qualified excavator and dumper operators to move the material required and proved losse form.',
  },
  {
    header: 'Material construction',
    body: 'Utilising the available materials to construct unique trail features. This can be in the form of dry stone walls and timber construction integrated into the trail.',
  },
  {
    header: 'Trail formation',
    body: 'This is the crucial step for exceptional trails. Analysis of the physics involved and precision sculpting will result in trails like no other.'
  },
  {
    header: 'Testing',
    body: 'All members of our team are experienced riders and provide the essential step of testing the product and modifying any imperfections.',
  },
  {
    header: 'Finishing',
    body: 'The trails are first compacted and then hand finished too provide and smooth riding surface and stunning visual appeal.',
  },
  {
    header: 'Sculpture',
    body: 'Though trails are scupltural in themselves, we thrive on creating additional scupltural pieces to enhance the atmosphere and sense of place.',
  },
  {
    header: 'Practical use',
    body: 'Through years of experience managing the trails in Wharncliffe, we understand the need for dedicated pathways and seating areas in order to make effective operation and use of the area possilbe.',
  },
];

const processItems = _.chunk(rawProcessItems.length / 2, rawProcessItems);

const ProcessItemList = ({ list }) => (
  <div>
    <ul className={`${cName}__process--list`}>
      { _.map(item => (
        <li key={item.header} className={`${cName}__process--item`}>
          {item.header}
        </li>), list) }
    </ul>
  </div>
);

const process = {
  heading: 'Process',
  text: (
    <React.Fragment>
      <p className={`${cName}__text`}>
        At all stages of the build, Wharncliffe Trailworks have the necessary skills to be able to deliver a final product that will be loved and enjoyed by all. Our process includes, but is not limited to.
      </p>

      <div className={`${cName}__process--items`}>
        { _.map(list => <ProcessItemList key={_.random(0, 10000)} list={list} />, processItems) }
      </div>

    </React.Fragment>
  ),
}

export default {
  company,
  process,
}
