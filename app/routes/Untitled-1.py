api.py spurconnect/models.py spurconnect/serializers.py spurconnect/tests.py spurconnect/urls.py spurconnect/views.py
spurconnect/api.py:102:13: F841 local variable 'name' is assigned to but never used
spurconnect/api.py:219:13: F841 local variable 'status' is assigned to but never used
spurconnect/api.py:222:13: F841 local variable 'createOrganizationsave' is assigned to but never used
spurconnect/api.py:251:17: F841 local variable 'user' is assigned to but never used
spurconnect/api.py:297:31: E712 comparison to True should be 'if cond is True:' or 'if cond:'
spurconnect/api.py:303:121: E501 line too long (137 > 120 characters)
spurconnect/api.py:317:27: E712 comparison to True should be 'if cond is True:' or 'if cond:'
spurconnect/api.py:322:121: E501 line too long (156 > 120 characters)
spurconnect/api.py:361:27: E712 comparison to True should be 'if cond is True:' or 'if cond:'
spurconnect/api.py:366:121: E501 line too long (147 > 120 characters)
spurconnect/serializers.py:3:1: F401 'django.utils.encoding.force_bytes' imported but unused
spurconnect/serializers.py:4:1: F401 'django.utils.http.urlsafe_base64_encode' imported but unused
spurconnect/serializers.py:5:1: F401 'django.utils.translation.ugettext as _' imported but unused
spurconnect/serializers.py:7:1: F401 'rest_framework.exceptions' imported but unused
spurconnect/serializers.py:36:121: E501 line too long (168 > 120 characters)
spurconnect/tests.py:3:1: F401 'django.test.TestCase' imported but unused
spurconnect/urls.py:5:1: F401 'rest_framework.routers' imported but unused