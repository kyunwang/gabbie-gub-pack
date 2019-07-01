import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// WIP

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

SEO.proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultprops = {
  title: 'Title',
  description: 'Description',
};
