import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";

const MediaUpload = () => {

    return(
        <div>
            <Dropzone
                onDrop={null}
            >
                <VideoDrop />
            </Dropzone>
        </div>
    )
};

export default MediaUpload;