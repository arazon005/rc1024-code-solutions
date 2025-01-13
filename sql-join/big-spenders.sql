select "payments"."amount" as "payment",
      "customers"."firstName",
      "customers"."lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "payment" desc
  limit 10;
