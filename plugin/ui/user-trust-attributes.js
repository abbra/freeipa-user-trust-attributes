define([
        'freeipa/phases',
        'freeipa/ipa'],
        function(phases, IPA) {

// helper function
function get_item(array, attr, value) {

    for (var i=0,l=array.length; i<l; i++) {
        if (array[i][attr] === value) return array[i];
    }
    return null;
}

var trust_attributes_plugin = {};

trust_attributes_plugin.add_user_trust_attributes_pre_op = function() {

    var facet = get_item(IPA.user.entity_spec.facets, '$type', 'details');
    var section = {
	    name: 'trust attributes',
	    label: '@i18n:trust_attributes.title',
        fields: [
        { name: 'ipantlogonscript',
                flags: ['w_if_no_aci'],
		options: {},
		tooltip: { title: '@i18n:trust_attributes.logonscript_tooltip' },
	},
        { name: 'ipantprofilepath',
                flags: ['w_if_no_aci'],
		options: {},
		tooltip: { title: '@i18n:trust_attributes.profilepath_tooltip' },
	},
        { name: 'ipanthomedirectory',
                flags: ['w_if_no_aci'],
		options: {},
		tooltip: { title: '@i18n:trust_attributes.homedirectory_tooltip' },
	},
        { name: 'ipanthomedirectorydrive',
                flags: ['w_if_no_aci'],
		$type: 'select',
		options: IPA.create_options([
		    'A:', 'B:', 'C:', 'D:', 'E:', 'F:', 'G:', 'H:', 'I:',
                    'J:', 'K:', 'L:', 'M:', 'N:', 'O:', 'P:', 'Q:', 'R:',
                    'S:', 'T:', 'U:', 'V:', 'W:', 'X:', 'Y:', 'Z:']),
		tooltip: { title: '@i18n:trust_attributes.homedirectorydrive_tooltip' },
	},
        ]
    };

    facet.sections.push(section);
    return true;
};

phases.on('customization',
          trust_attributes_plugin.add_user_trust_attributes_pre_op);

return trust_attributes_plugin;
});

