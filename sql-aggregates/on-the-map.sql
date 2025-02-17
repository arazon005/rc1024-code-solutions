select "co"."name" as "country", count(*) as "count"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
  group by "co"."countryId"
  order by "count";
