const Sequelize = require('sequelize');
const Model = require('sequelize').Model;

class Bug extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                responsibleId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'users',
                        key: 'id',
                    },
                },
                reporterId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'users',
                        key: 'id',
                    },
                },
                enviroment: {
                    type: Sequelize.ENUM('DEV', 'HOMOLOG', 'PROD'),
                    allowNull: false,
                },
                priority: {
                    type: Sequelize.ENUM('BAIXA', 'MEDIA', 'ALTA'),
                    allowNull: false,
                },
                status: {
                    type: Sequelize.ENUM('TODO', 'EM_ANDAMENTO', 'REVIEW', 'CONCLUIDO'),
                    allowNull: false,
                },
            },
            { sequelize }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'responsibleId'
        });
        this.belongsTo(models.User, {
            foreignKey: 'reporterId'
        });
    }
}

module.exports = Bug;
