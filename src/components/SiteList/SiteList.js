import React, {PropTypes, Component} from 'react';
import {translate} from 'react-i18next';

class SiteList extends Component {
  static propTypes = {
    sites: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchSites: PropTypes.func.isRequired,
    t: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchSites();
  }

  render() {
    const {sites, loading, t} = this.props;

    if (loading) {
      return (
        <div>
          <h2>{t('sitelist.loading')}</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>{t('sitelist.title')}</h2>
        <ul>
          {sites.map(site =>
            <li className="site" data-hook="site" key={site.id}>{site.siteName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default translate(null, {wait: true})(SiteList);
