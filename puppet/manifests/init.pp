class apt_update {
    exec { "aptGetUpdate":
        command => "sudo apt-get update",
        path => ["/bin", "/usr/bin"]
    }
}

class { '::nodejs':
  nodejs_dev_package_ensure => 'present',
  npm_package_ensure        => 'present',
  repo_class                => '::epel',
}

class yeoman {
  $yeomanPackages = [ "curl", "git", "rubygems", "libjpeg-turbo-progs", "optipng", "phantomjs", "python-software-properties" ]
    package { $yeomanPackages:
      ensure => "installed",
      require => Exec['apt-get update'],
    }
    package { 'compass':
      ensure   => latest,
      provider => 'gem',
      require  =>  Package["rubygems"],
    }
    package { 'yo':
      ensure => present,
      provider => 'npm',
      require => Class["nodejs"],
    }
    package { 'grunt-cli':
      ensure => present,
      provider => 'npm',
      require => Class["nodejs"],
    }
    package { 'bower':
      ensure => present,
      provider => 'npm',
      require => Class["nodejs"],
    }
    exec {
      "checking yeoman":
      command => "curl -L get.yeoman.io | bash",
      require => Class["nodejs"],
    }
}