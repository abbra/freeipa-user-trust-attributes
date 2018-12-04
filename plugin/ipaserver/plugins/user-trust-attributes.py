from ipaserver.plugins.user import user
from ipalib.parameters import Str, StrEnum
from ipalib.text import _
from ipaserver.plugins.internal import i18n_messages

user.takes_params += (
        Str('ipantlogonscript?',
            cli_name='logon_script',
            label=_('Logon script'),
        ),
        Str('ipantprofilepath?',
            cli_name='profile_path',
            label=_('Profile path'),
        ),
        Str('ipanthomedirectory?',
            cli_name='nt_home_directory',
            label=_('NT Home Directory'),
        ),
        StrEnum('ipanthomedirectorydrive?',
            cli_name='nt_home_directory_drive',
            label=_('NT Home Directory Drive'),
            values=('A:', 'B:', 'C:', 'D:', 'E:', 'F:', 'G:', 'H:', 'I:',
                    'J:', 'K:', 'L:', 'M:', 'N:', 'O:', 'P:', 'Q:', 'R:',
                    'S:', 'T:', 'U:', 'V:', 'W:', 'X:', 'Y:', 'Z:'),
        ),
        )

user.default_attributes.extend(['ipantlogonscript',
                                'ipantprofilepath',
                                'ipanthomedirectory',
                                'ipanthomedirectorydrive'])

i18n_messages.messages['trust_attributes'] = {
        "title": _("User attributes for Active Directory integration"),
        "logonscript_tooltip":
            _("Path to a script executed on a Windows system at logon"),
        "profilepath_tooltip":
            _("Path to a user profile, in UNC format \\\\server\\share\\"),
        "homedirectory_tooltip":
            _("Path to a user home directory, in UNC format"),
        "homedirectorydrive_tooltip": _("Drive to mount a home directory"),
}

