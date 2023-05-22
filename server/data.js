const Records =  [
    {
        "customer_city": "Delhi",
        "customer_country": "India",
        "customer_postal_code": "110001",
        "customer_state": "National Capital Territory of Delhi",
        "customer_language_code": "EN",
        "site_section": "search",
        "site_platform": "ARI - Responsive",
        "site_company_name": "ARI Primary Location",
        "site_phone_main": "1234567899",
        "site_internal_id": "LyProd1",
        "tealium_event": "product_list_view",
        "tealium_session_id": "1683888914796",
        "tealium_session_number": "33",
        "tealium_session_event_number": "7"
    },
    {
        "customer_city": "Delhi",
        "customer_country": "India",
        "customer_postal_code": "110001",
        "customer_state": "National Capital Territory of Delhi",
        "customer_language_code": "EN",
        "site_section": "search",
        "site_platform": "ARI - Responsive",
        "site_company_name": "ARI Primary Location",
        "site_phone_main": "1234567899",
        "site_internal_id": "LyProd1",
        "tealium_event": "product_list_view",
        "tealium_session_id": "1683888914796",
        "tealium_session_number": "33",
        "tealium_session_event_number": "7"
    },
    {
        "customer_city": "Delhi",
        "customer_country": "India",
        "customer_postal_code": "110001",
        "customer_state": "National Capital Territory of Delhi",
        "customer_language_code": "EN",
        "site_section": "search",
        "site_platform": "ARI - Responsive",
        "site_company_name": "ARI Primary Location",
        "site_phone_main": "1234567899",
        "site_internal_id": "LyProd1",
        "tealium_event": "product_list_view",
        "tealium_session_id": "1683888914796",
        "tealium_session_number": "33",
        "tealium_session_event_number": "7"
    },
    {
        "customer_city": "Delhi",
        "customer_country": "India",
        "customer_postal_code": "110001",
        "customer_state": "National Capital Territory of Delhi",
        "customer_language_code": "EN",
        "site_section": "search",
        "site_platform": "ARI - Responsive",
        "site_company_name": "ARI Primary Location",
        "site_phone_main": "1234567899",
        "site_internal_id": "LyProd1",
        "tealium_event": "product_list_view",
        "tealium_session_id": "1683888914796",
        "tealium_session_number": "33",
        "tealium_session_event_number": "7"
    },
    {
        tealium_event: 'form_load',
        customer_city: 'Duluth',
        customer_country: 'United States',
        customer_postal_code: '55802',
        customer_state: 'Minnesota',
        customer_country_code: 'US',
        customer_language_code: 'EN',
        page_title: 'Search Results',
        page_title_count: '14',
        site_section: 'search',
        site_platform: 'ARI - Responsive',
        site_company_name: 'Lytestvdp- Test fac. id',
        site_phone_main: '(202) 588-6500',
        site_company_city: 'New York',
        site_company_state: 'NY',
        site_company_zip_code: '10001',
        site_id: '29044',
        site_internal_id: 'LyTestVDP',
        piwik_id: 'd66a8017-c93d-4e56-bf1c-2cfc12e621ae',
        form_name: 'Value Your Trade',
        form_type: 'valueyourtrade',
        form_id: '3106',
        product_id: 11026227,
        product_name: '2020 M2 (Video only only) - Honda',
        product_year: '2020',
        product_make: 'Honda',
        product_make_id: '-536870896',
        product_model: 'M2 (Video only only)',
        product_uri: '/inventory/2020-honda-m2-video-only-only-sfo-ca-92001-11026227i',
        product_condition: 'New',
        product_type: 'Inventory',
        product_price: 11000,
        product_category: 'Side x Side',
        product_category_id: '3006',
        product_original_price: 12699,
        product_industry: 'Power Sports',
        product_on_sale: '1',
        product_discount_amount: 1699,
        product_subcategory: 'Rec/Utility',
        product_subcategory_id: '93248',
        product_custom_image_count: 0,
        product_videos_count: 1,
        product_description_char_count: 3629,
        page_h1: 'Inventory',
        timestamp: '2023-05-19T10:35:07.569Z'
      }
]

const Columns = [
{
    Header: 'Customer Info',
    columns: [
        {
            Header: 'City',
            accessor: 'customer_city',
        },
        {
            Header: 'Country',
            accessor: 'customer_country',
        },
        {
            Header: 'PostalCode',
            accessor: 'customer_postal_code',
        },
        {
            Header: 'State',
            accessor: 'customer_state',
        },
        {
            Header: 'Address',
            accessor: 'customer_language_code',
        },
    ],
},
{
    Header: 'Site Info',
    columns: [
        {
            Header: 'Section',
            accessor: 'site_section',
        },
        {
            Header: 'Platform',
            accessor: 'site_platform',
        },
        {
            Header: 'CompanyName',
            accessor: 'site_company_name',
        },
        {
            Header: 'Phone',
            accessor: 'site_phone_main',
        },
        {
            Header: 'Facility',
            accessor: 'site_internal_id',
        },
    ],
},
{
    Header: 'Event Info',
    columns: [
        {
            Header: 'Event',
            accessor: 'tealium_event',
        },
        {
            Header: 'SessionId',
            accessor: 'tealium_session_id',
        },
        {
            Header: 'SessionNumber',
            accessor: 'tealium_session_number',
        },
        {
            Header: 'EventNumber',
            accessor: 'tealium_session_event_number',
        },
    ],
}
]

const Data = {
    data: Records,
    columns: Columns
}

module.exports = Data;