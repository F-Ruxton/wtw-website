import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';
import { url } from '../utils/images/CloudinaryService';
import PhotoThumbnails from './PhotoThumbnails';

/*

example for chaining transformations
<Image
  className="static-photo"
  responsive
  type="facebook"
  width="auto"
  crop="scale"
  angle="20"
  publicId={this.state.currentPublicId}
>
<Transformation effect="art:hokusai" />
<Transformation
  border="3px_solid_rgb:00390b"
  radius="20"
/>
</Image>

*/





class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = { showMore: false };
    }

    render() {
        const options = { ...this.context, ...this.props };
        const urlPath = url(options.publicId, options);

        return (
            <div className="photo">
                {this.props.context && (
                    <h2>{this.props.context.custom.photo}</h2>
                )}
                <a href={urlPath} target="_blank" rel="noopener noreferrer">
                    <Image
                        publicId={this.props.publicId}
                        className="thumbnail inline"
                        width="150"
                        height="150"
                        crop="fit"
                        quality="80"
                    >
                        <Transformation quality="auto" fetchFormat="auto" />
                    </Image>
                </a>
                {!this.state.showMore && (
                    <div className="less_info">
                        <button
                            className="toggle_info"
                            onClick={this.showMore.bind(this)}
                        >
                            Show transformations
                        </button>
                    </div>
                )}

                {this.state.showMore && (
                    <div className="more_info">
                        <button
                            className="toggle_info"
                            onClick={this.showLess.bind(this)}
                        >
                            Hide transformations
                        </button>
                        <PhotoThumbnails publicId={this.props.publicId} />
                    </div>
                )}
            </div>
        );
    }

    showMore() {
        this.setState({ showMore: true });
    }

    showLess() {
        this.setState({ showMore: false });
    }
}

Photo.propTypes = {
    context: PropTypes.object,
    publicId: PropTypes.string,
};

Photo.contextTypes = {
    cloudName: PropTypes.string,
    uploadPreset: PropTypes.string,
};

export default Photo;
