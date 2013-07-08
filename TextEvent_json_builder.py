
import json
def prettify(data, sort_keys = True):
    return json.dumps(data, sort_keys = sort_keys, indent = 4)
def prettyprint(data, sort_keys = True):
    return prettify(data, sort_keys)
pp = prettyprint

events = {}

# Parse Argument Help Text from source code

# Import parsed /src/common/text.c
# TODO: Parse from file
# Find: static char \* const (\w+)\[\] = \{\n((.*\n)*?)\};
# Replace: \1 = [\n\2\n]
from help_argument_text import *

HEXCHAT_SOURCE_ROOT = './hexchat-master'
with open(HEXCHAT_SOURCE_ROOT + '/src/common/textevents.in') as f:
    for line in f:
        event_name = line.strip()
        f.readline().strip() # ?
        event_args_help_texts_var_name = f.readline().strip()
        event_default_text = f.readline().strip()
        event_arg_count = f.readline().strip()
        f.readline()

        events[event_name] = {
            "msg": "",
            "type": "",
            "args": []
        }
        try:
            events[event_name]['args'] = globals()[event_args_help_texts_var_name]
        except:
            pass
        events[event_name]['msg'] = event_default_text

with open('TextEvents.json', 'w') as f:
    f.write(prettify(events))