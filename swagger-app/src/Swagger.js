import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

class Swagger1UI extends Component {

    componentDidMount() {
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: this.props.url,
            spec: this.props.spec,
            presets: [presets.apis]
        });
    }

    render() {
        return (
            <div id="swaggerContainer" />
        );
    }
}

Swagger1UI.propTypes = {
    url: PropTypes.string,
    spec: PropTypes.object
};

Swagger1UI.defaultProps = {
    url: `http://petstore.swagger.io/v2/swagger.json`
};

export default Swagger1UI;