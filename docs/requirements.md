# System requirements

## Specification

The main purpose of the system is to manage information about accomodated
hotel guests. Collecting of this information is often required by law.
The system must be able to store all this information (CRUD operations) and
create a printable summary periodically.

These actions must happen in such a way that law requirements are fulfilled
(e.g. GDPR) and the data is stored securely, with only authorized (registered)
personnel being able to access it.

## Functions

1. Log in with e-mail address and password
2. Add a new entry for a guest (see the list below)
3. Edit or delete an existing entry
4. Filter/group the entries by time interval (one month possibly)
5. Create a printable output (table) for a specified time interval
6. Change user profile data: e-mail address and name

## Guest information

- sequence number (_pořadové číslo_)
- first name (_jméno_)
- surname (_příjmení_)
- purpose of stay (_účel pobytu_)
    - recreation (_léčení nebo rekreace_)
    - work (_pracovní_)
    - education (_vzdělávací_)
    - other (_jiný_)
- ID/passport number (_občanský průkaz/pas_)
- permanent residence (_trvalý pobyt_)
    - country (_stát_)
    - place (_municipality_)
    - district (_část obce_)
    - street (_ulice_)
    - number (_č.p./ev._)
- date of arrival (_datum příchodu_)
- date of departure (_datum odchodu_)
- note (_poznámka_)
