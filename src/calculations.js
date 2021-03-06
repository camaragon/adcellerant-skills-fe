// FILTER FUNCTIONALITY //
const filterData = (state, form) => {
    const filtered = filterImpressions(state, form);
    return filtered;
};

const filterImpressions = (state, form) => {
    if (form.impressions === '') {
      return filterClicks(state, form);
    } else if (form.impressions.includes('-')) {
      const range = form.impressions.split('-');
      const filtered = state.filter(ad => ad.impressions <= range[1] && ad.impressions >= range[0]);
      return filterClicks(filtered, form);
    } else {
      const filtered = state.filter(ad => ad.impressions >= form.impressions)
      return filterClicks(filtered, form);
    }
  };

const filterClicks = (data, form) => {
  if (form.clicks === '') {
    return filterPlatform(data, form);
  } else if (form.clicks.includes('-')) {
    const range = form.clicks.split('-');
    const filtered = data.filter(ad => ad.clicks <= range[1] && ad.clicks >= range[0]);
    return filterPlatform(filtered, form);
  } else {
    const filtered = data.filter(ad => ad.clicks >= form.clicks)
    return filterPlatform(filtered, form);
  }
};

const filterPlatform = (data, form) => {
  if (form.platform === '') {
    return filterProduct(data, form);
  } else {
    const filtered = data.filter(ad => ad.platform === form.platform);
    return filterProduct(filtered, form);
  }
};

const filterProduct = (data, form) => {
  if (form.product === '') {
    return filterDateRange(data, form);
  } else {
    const filtered = data.filter(ad => ad.product === form.product);
    return filterDateRange(filtered, form);
  }
};

const filterDateRange = (data, form) => {
  if (form.start === '') {
    return data;
  } else if (form.end === '') {
    const filtered = data.filter(ad => ad.date === form.start);
    return filtered;
  } else {
    const start = Date.parse(form.start);
    const end = Date.parse(form.end);
    const filtered = data.filter(ad => {
      let date = Date.parse(ad.date);
      return (date >= start && date <= end)
    })
    return filtered;
  }
};

// CHART FUNCTIONALITY //
const findImpresByPlat =(data) => {
  return data.reduce((sum, ad) => {
    if (!sum[ad.platform]) {
      sum[ad.platform] = ad.impressions ;
    } else {
      sum[ad.platform] += ad.impressions;
    }
    return sum;
  }, {})
}

const findClicksByPlat = (data) => {
  return data.reduce((sum, ad) => {
    if (!sum[ad.platform]) {
      sum[ad.platform] = ad.clicks;
    } else {
      sum[ad.platform] += ad.clicks;
    }
    return sum;
  }, {})
}

const findImpresByProd = (data) => {
  return data.reduce((sum, ad) => {
    if (!sum[ad.product]) {
      sum[ad.product] = ad.impressions;
    } else {
      sum[ad.product] += ad.impressions;
    }
    return sum;
  }, {})
}

const findClicksByProd = (data) => {
  return data.reduce((sum, ad) => {
    if (!sum[ad.product]) {
      sum[ad.product] = ad.clicks;
    } else {
      sum[ad.product] += ad.clicks;
    }
    return sum;
  }, {})
}

export {
  filterData, 
  findImpresByPlat,
  findClicksByPlat,
  findImpresByProd,
  findClicksByProd
};