# Data sources and definitions

Snapshot retrieved September 23, 2026. No credentials or runtime API calls are needed for directory data.

## College Scorecard

Source: U.S. Department of Education, [College Scorecard downloads](https://collegescorecard.ed.gov/data/), **Most-Recent-Cohorts-Institution_06102026.zip**, released June 10, 2026. [Technical documentation](https://collegescorecard.ed.gov/assets/InstitutionDataDocumentation.pdf) and [data dictionary](https://collegescorecard.ed.gov/assets/CollegeScorecardDataDictionary.xlsx).

Scope: `CURROPER = 1`, `HIGHDEG` is 3 or 4, and `STABBR` is in the 50 states or DC. This yields 2,593 institutions. It is a government-data directory, not a ranking. Federal data coverage and reporting lags mean it is not a guarantee of every U.S. university or of present-day operating status. Reporting years differ across measures; the release date is not the academic year. The dictionary currently available on the source site has an older cohort map, so the app does not assign unverified academic years to individual figures.

| App measure | Source / interpretation |
| --- | --- |
| Identity and website | `UNITID`, `INSTNM`, `CITY`, `STABBR`, `INSTURL`. Original 18 schools keep their old app IDs and short display names so saved choices continue to work. |
| Undergraduate size | `UGDS`: degree/certificate-seeking undergraduate enrollment, not total enrollment including graduate students. |
| International community | `UGDS_NRA × 100`: nonresident share of undergraduates; not an assessment of student services or campus culture. |
| Tuition and fees | `TUITIONFEE_IN` / `TUITIONFEE_OUT`: annual undergraduate tuition and required fees, before aid. Out-of-state is not necessarily the international price. |
| Living expenses | `ROOMBOARD_ON + OTHEREXPENSE_ON` where both exist; otherwise `ROOMBOARD_OFF + OTHEREXPENSE_OFF`. On/off-campus basis is displayed. Books excluded. No substitution from total attendance costs or partial sums. |
| Field filter | Two-digit `CIPxxBACHL` values 1 (offered) or 2 (offered exclusively through distance education). These are broad undergraduate areas; check exact programs and delivery mode with each school. |
| Academic highlights | Three largest positive `PCIPxx` shares of undergraduate awards. These describe program volume, not fame, quality, selectivity, or an academic-reputation ranking. |
| Graduate-focused flag | `PREDDEG = 4`; undergraduate fields and figures may be unavailable. |

`NA`, privacy-suppressed, empty, and invalid/negative numeric values become `null`, not zero. Genuine zero values remain zero. A selected numeric filter excludes missing values unless the user opts to include them. Unknown program offerings do not satisfy a field-of-study filter.

## Research citations

Source: [OpenAlex institution API](https://help.openalex.org/api/), retrieved September 23, 2026. U.S. education-type institutions queried with `country_code:us,type:education`.

1,986 directory records match by a unique normalized institution name, or by a website hostname unique in both datasets with coordinates within 0.3 degrees. Ambiguous/unmatched institutions have no citation count. Records retain the OpenAlex URL and match method for audit. Exact-name matching and bibliographic institution aggregation still have limitations; the linked record should be checked before formal comparisons.

The displayed `cited_by_count` is total citations to affiliated research in the OpenAlex record. It is not citations per faculty, field-normalized impact, a QS score, or a measure of teaching quality. Larger and older research institutions typically have an advantage.

## Employment and average annual earnings

Employer reputation has been replaced by these two distinct measures, taken from the bundled College Scorecard CSV. Definitions and periods were checked against the [published data dictionary](https://collegescorecard.ed.gov/files/CollegeScorecardDataDictionary.xlsx) and [September 2025 technical documentation](https://collegescorecard.ed.gov/files/InstitutionDataDocumentation.pdf).

- **Employment rate (2,147 schools):** `100 × COUNT_WNE_P10 / (COUNT_WNE_P10 + COUNT_NWNE_P10)`, calculated only if both counts are nonnegative, reported, and their sum is positive. Rounded to two decimal places. This is the working share among tracked federally aided former students who are not enrolled, 10 years after entry. It includes non-completers, excludes those still enrolled, and is neither a graduate placement rate nor an unemployment statistic. The published cohort map identifies 2009–10 / 2010–11 entry cohorts measured in calendar 2020 / 2021.
- **Average annual earnings (2,065 schools):** `MN_EARN_WNE_P10`, the discontinued arithmetic mean for working, non-enrolled federally aided former students 10 years after entry. The published cohort map identifies 2003–04 / 2004–05 entry cohorts measured in 2014 / 2015, adjusted to 2017 dollars. It includes wages and positive self-employment earnings, not just base salary. It is explicitly labeled historical in the app and must not be presented as current earnings or starting salary. No median is silently substituted for the mean.
- Missing or privacy-suppressed values remain null. Employer reputation scores are no longer used. These measures cover different cohorts and do not represent all alumni or international graduates.

## Sliders and location search

Campus size is a single optional maximum slider from 0 to 10,000 undergraduates. Annual tuition and living expenses each have an optional maximum slider from $0 to $10,000. Off means no limit, including values above 10,000. An enabled zero means a real zero limit, not “any.” Selected filters combine using AND; missing numeric measures follow the user’s include-missing setting.

State names/codes match exact states. Recognized city names match reported campus cities; adding a state (such as “Boston, MA”) disambiguates location. Other queries search names and academic fields. City matching is not a metro-radius search. Matching schools already in a list are counted but not shown again in the review deck until removed from that list.

## Photos and representative images

Photo metadata updated September 24, 2026. **1,567 of 2,593 schools have an image**: 1,403 campus/representative images and 164 university emblems. The other 1,026 retain an explicitly labeled unavailable-photo state and an official website link.

The original 18 official university references are preserved. Expanded coverage uses [Wikidata IPEDS identifier P1771](https://www.wikidata.org/wiki/Property:P1771) joined to the app's `UNITID`, with [representative image P18](https://www.wikidata.org/wiki/Property:P18). Filename checks reject obvious logos, seals, maps, flags, portraits, and unsupported formats for the campus-image slot. Where no campus image is available, [logo P154](https://www.wikidata.org/wiki/Property:P154) or seal P158 supplies a clearly labeled emblem displayed without cropping. Previously sourced Wikipedia article images remain where an ID-matched replacement is unavailable.

[Wikimedia Commons imageinfo](https://www.mediawiki.org/wiki/API:Imageinfo) supplies thumbnail URLs, MIME types, original file sizes, author credits, and licenses. New metadata without an image URL, author, or license is not used. Author HTML is converted to plain text; it is not inserted as executable markup. New records keep `photoKind`, `photoCredit`, and `photoMatchedBy`, plus a link to the Commons file page. A direct original-image fallback is included only when the original is no larger than 2 MB. Photos are remote and may still be delayed, removed, or rate-limited; the app has an explicit retry action and ignores stale load events from previously viewed cards.

University images depict the institution, not necessarily every branch, current building, or campus season. The full 1,567-image collection has not been manually visually reviewed. Federal-ID matching is stronger than guessing from similar school names; sample new campus images were checked for successful retrieval and a Stanford sample was visually inspected. Some photos may be historical. The app does not claim all images are current photographs.

External images retain their owners' rights. New Commons images show author/license information with a link to the file page; original university-site photos link to their source pages. Do not apply a blanket project license to external images. Follow each image's terms for redistribution.

## Updating

The compact dataset is embedded at the beginning of `script.js` (`dataInfo`, `fieldNames`, and `universities`) so opening `uni.html` directly remains supported. Refresh from the sources above, preserve legacy IDs, retain explicit nulls, and update the release date and coverage counts. Do not silently fill gaps with generated or guessed values.
