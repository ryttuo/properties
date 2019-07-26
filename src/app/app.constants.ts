import { environment } from 'src/environments/environment';

const API = environment.api;


export const CONSTANTS = {
    URLS : {
        PROPERTIES : `${API}/api/v1.5/listings/serp/search/?filter__listing_category_id=2&lat=34.066888&limit=200&lon=-118.300592&min__list_price=0&page=1&sort=featured`,
        ARTICLES : `${API}/api/v1.5/tips/serp/search/?limit=10&must__author.id=7869&page=1&sort=last_updated_date__desc`,
    }
};

