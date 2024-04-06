SELECT item.item
FROM item
INNER JOIN item_location ON item.id = item_location.item_id
WHERE item_location.location_id = 1