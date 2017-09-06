import React from 'react';
import './Image.css';

export default class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
        const canvas = document.getElementById("theCanvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(125, 46, 138, 0.5)";
        ctx.fillRect(25,25,100,100);
        ctx.fillStyle = "rgba( 0, 146, 38, 0.5)";
        ctx.fillRect(58, 74, 125, 100);

        ctx.fillStyle = "blue";
        ctx.font = "bold 16px Arial";
        ctx.fillText("Zibri", (canvas.width / 2) - 17, (canvas.height / 2) + 8);

        const data = canvas.toDataURL();
        console.log('image -> ', data);

        const image = document.getElementById("theImage");
        image.src = data;
    }

    render() {
        const {} = this.state;

        return (
            <div className="Image-container">
                <canvas width="200" height="200" id="theCanvas">
                </canvas>
                <img id="theImage" />
            </div>
        );
    }
}

const styles = {
}

