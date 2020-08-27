import React from 'react';

class DetailsUpload extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.props.title}
                    onChange={this.props.update("title")}
                    required=" "
                />
                <label className="upload-labels">Title</label>

                <input
                    type="text"
                    value={this.props.description}
                    onChange={this.props.update("description")}
                />
                <label className="upload-labels">Description</label>
                <div className='step-buttons'>
                    <button onClick={this.props.prevStep}>Previous Step</button>
                    <button onClick={this.props.nextStep}>Next Step</button>
                </div>
            </div>
        )
    }
}

export default DetailsUpload;