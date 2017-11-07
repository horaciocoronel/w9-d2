# irb(main):001:0> require 'httparty'
# => true
# irb(main):002:0> toronto_wards_response = HTTParty.get('https://represent.opennorth.ca/boundaries/toronto-wards/')
#
# # Iterate through your new hash and display the name of each ward in the collection.
#
# irb(main):003:0> toronto_wards_json["objects"].each do |district|
# irb(main):004:1* puts district["name"]
# irb(main):005:1> end
#### RESULTS ####
Don Valley West (25)
Scarborough East (43)
Toronto Centre-Rosedale (28)
York Centre (10)
York Centre (9)
Don Valley West (26)
York South-Weston (11)
Beaches-East York (32)
Scarborough-Rouge River (41)
Scarborough East (44)
Scarborough-Rouge River (42)
Scarborough-Agincourt (39)
Willowdale (24)
Scarborough-Agincourt (40)
York West (7)
Don Valley East (33)
Willowdale (23)
York West (8)
Scarborough Centre (38)
Don Valley East (34)

toronto_postal_codes = HTTParty.get('https://represent.opennorth.ca/postcodes/M5G2K5/')

irb(main):085:0> toronto_postal_codes["representatives_centroid"].each do|rep|
irb(main):086:1* puts "#{rep["first_name"]} | #{rep["last_name"]} | #{rep["email"]}"
irb(main):087:1> end
#### RESULTS ####
Han | Dong | hdong.mpp.co@liberal.ola.org
Chrystia | Freeland | Chrystia.Freeland@parl.gc.ca
Kristyn | Wong-Tam | councillor_wongtam@toronto.ca
John | Tory | mayor_tory@toronto.ca
John | Tory | mayor_tory@toronto.ca
