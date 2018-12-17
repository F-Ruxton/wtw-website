import React from 'react';
import _ from 'lodash/fp';
import { Redirect } from 'react-router';
import Header from '../../Header';
import Gallery from '../../Gallery';
import FillImage from '../../FillImage';
import withImageFetch from '../../../utils/images/withImageFetch';
import projects from '../Portfolio/projects';
import routes from '../routes';
import './styles.css';

export const cName = 'Project';

const ProjectContent = ({ images, project = {} }) => {
  const headerTag = _.get(['headerImg', 'request', 'tag'], project);
  const headerImg = _.getOr({}, headerTag, images);

  const galleryTag    = _.get(['gallery', 'request', '0', 'tag'], project);
  const galleryImages = _.getOr([], galleryTag, images);

  return (
    <div className={cName}>
      <div className={`${cName}__header`}>
        <Header>{_.get('title', project)}</Header>

        <div className={`${cName}__header-img--ctr`}>
          <FillImage
            className={`${cName}__header-img--img`}
            image={{ src: _.get('url', headerImg) }}
          />
        </div>
      </div>


      <div className={`${cName}__text`}>
        { _.get('text', project) }
      </div>

      <div className={`${cName}__gallery`}>
        <Gallery images={galleryImages} />
      </div>

    </div>
  );
};

const Project = props => {
  const id      = _.get(['0', 'match', 'params', 'id'], props);
  const project = _.find({ id }, projects);

  if (_.isUndefined(project)) {
    return <Redirect to={routes.portfolio} />
  }

  const imageRequest      = _.concat(
    _.getOr([], ['headerImg', 'request'], project),
    _.getOr([], ['gallery'  , 'request'], project),
  );
  const ProjectWithImgReq = withImageFetch(imageRequest, ProjectContent);

  return <ProjectWithImgReq project={project} />;
}

export default Project;
