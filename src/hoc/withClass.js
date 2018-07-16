import React, { Component } from 'react';

const withClass = (WrappedComponend, className) => {
    return class extends Component{
        render(){
            return (
                <div className={className}>
                    <WrappedComponend {...this.props} />
                </div>
            );
        }

    }
}




export default withClass;