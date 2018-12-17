import React          from 'react';
import _              from 'lodash/fp';
import LinkImage      from '../LinkImage';
import routes         from '../Pages/routes';
import { getUrl }     from '../../utils/navigation';
import withImageFetch from '../../utils/images/withImageFetch';
import { findByTag }  from '../../utils/images';
import './styles.css';

const cName = 'ProjectSelector';

const addProjectImages = images => project => {
  const linkImg = _.get('linkImg', project);
  const tag     = _.get(['request', 'tag'], linkImg);
  const image   = findByTag(images, tag);

  return {
    ...project,
    linkImg: {
      ...linkImg,
      ...image && { image }
    },
  }
}

const ProjectSelectorContent = ({ images = {}, projects: rawProjects = [] }) => {
  const projects = _.map(addProjectImages(images), rawProjects);

  return (
    <div className={cName}>
      <div className={`${cName}__projects`}>
        { !_.isEmpty(images) &&
          _.map(project => (
            <LinkImage
              key={_.get('id', project) + _.random(0, 100000)}
              className={`${cName}__link`}
              to={getUrl(routes.project, { ':id': _.get('id', project) })}
              linkText={_.get('linkText', project)}
              img={_.get(['linkImg', 'image'], project)}
              style={{ opacity: 0.6 }}
            />
          ), projects) }
      </div>
    </div>
  );
}

const ProjectSelector = ({ projects }) => {
  const imageRequest = _.reduce(
    (acc, project) => _.concat(acc, _.get(['linkImg', 'request'], project)),
    [],
    projects,
  );
  const ProjectSelectorWithImageRequest = withImageFetch(imageRequest, ProjectSelectorContent);

  return <ProjectSelectorWithImageRequest projects={projects} />
}

export default ProjectSelector;
