-- Query 1
INSERT INTO public.account(account_firstname, account_lastname, account_email, account_passowrd)
VALUES	(
    'Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n'
);

-- Query 2
UPDATE public.account
SET account_type = 'Admin'
WHERE account_firstname = 'Tony';

-- Query 3
DELETE 
FROM public.account
WHERE account_firstname = 'Tony';

-- Query 4
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_id = 10;

-- Query 5
SELECT public.inventory.inv_make, public.inventory.inv_model
FROM public.inventory 
INNER JOIN public.classification 
ON public.inventory.classification_id = public.classification.classification_id
WHERE public.classification.classification_name = 'Sport'
;

-- Query 6
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/')